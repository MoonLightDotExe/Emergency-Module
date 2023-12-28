from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from sklearn.cluster import KMeans
from scipy.spatial.distance import cdist

app = Flask(__name__)
CORS(app)

def calculate_cluster_radius(cluster_center, cluster_points):
    distances = cdist(np.array(cluster_points), np.array([cluster_center]))
    average_distance = np.mean(distances)
    return average_distance

@app.route('/cluster', methods=['POST'])
def cluster_coordinates():
    data = request.get_json()
    latitudes = np.array(data.get('latitudes'))
    longitudes = np.array(data.get('longitudes'))

    coordinates = np.column_stack((latitudes, longitudes))

    n_clusters = data.get('n_clusters', 5)

    kmeans = KMeans(n_clusters=n_clusters, random_state=42)
    labels = kmeans.fit_predict(coordinates)

    cluster_centers = kmeans.cluster_centers_

    response_data = {
        'cluster_centers': cluster_centers.tolist(),
        'clusters': {}
    }

    for cluster_label in range(n_clusters):
        cluster_indices = np.where(labels == cluster_label)[0]
        cluster_coords = coordinates[cluster_indices, :].tolist()
        cluster_center = cluster_centers[cluster_label]
        cluster_radius = calculate_cluster_radius(cluster_center, cluster_coords)
        
        response_data['clusters'][str(cluster_label)] = {
            'coordinates': cluster_coords,
            'center': cluster_center.tolist(),
            'radius': cluster_radius
        }

    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
