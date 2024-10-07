import joblib
import pandas as pd
from app.data.load_data import load_real_data

# Cargar modelos predichos
model = joblib.load('models/satellite_prediction_model.pkl')

def get_real_and_predicted_values(latitude: float, longitude: float):
    # Cargar datos reales desde Kaggle
    real_data = load_real_data()

    # Buscar los valores reales más cercanos a las coordenadas solicitadas
    real_entry = real_data.loc[(real_data['latitude'] == latitude) & (real_data['longitude'] == longitude)]

    if real_entry.empty:
        raise ValueError("No se encontraron valores reales para las coordenadas proporcionadas.")

    # Generar predicción usando el modelo
    input_data = [[latitude, longitude]]  # Datos de entrada para el modelo
    predicted_data = model.predict(input_data)

    return real_entry.to_dict(orient="records"), predicted_data.tolist()
