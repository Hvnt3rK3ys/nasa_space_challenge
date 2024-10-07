from pydantic import BaseModel

class CoordinateData(BaseModel):
    latitude: float
    longitude: float
