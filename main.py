from fastapi import FastAPI, HTTPException
from app.models.coordinate_model import CoordinateData
from app.services.prediction_service import get_real_and_predicted_values

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Satellite coordinates prediction API"}

# Endpoint to get real and predicted data for a given coordinate
@app.post("/predict/")
async def predict_coordinates(data: CoordinateData):
    try:
        real_data, predicted_data = get_real_and_predicted_values(data.latitude, data.longitude)
        return {
            "real_values": real_data,
            "predicted_values": predicted_data
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error occurred: {str(e)}")
