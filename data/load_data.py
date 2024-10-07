import pandas as pd
import os
from kaggle.api.kaggle_api_extended import KaggleApi

def download_dataset():
    api = KaggleApi()
    api.authenticate()
    api.dataset_download_files('manueljoseparra/nac-data-bucket', path='data/', unzip=True)

def load_real_data():
    # Verificar si los datos ya están descargados
    if not os.path.exists('data/nac_data.csv'):
        download_dataset()

    # Cargar los datos desde el archivo CSV descargado
    real_data = pd.read_csv('data/nac_data.csv')

    return real_data
