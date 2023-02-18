from typing import List

from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app.models import models, schemas
from app.db import crud
from app.db.database import SessionLocal, engine
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:4200",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/categories/", response_model=List[schemas.Category])
def get_categories(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    categories = crud.get_categories(db, skip, limit)
    return categories

@app.get("/category/{id}")
def get_category(id: int, db: Session = Depends(get_db)):
    category = crud.get_category_by_id(db, id)
    return category

@app.post("/category/")
def create_category(category: schemas.CategoryCreate, db: Session = Depends(get_db)):
    return crud.create_category(db, category)

@app.put("/category/")
def update_category(category: schemas.CategoryUpdate, db: Session = Depends(get_db)):
    return crud.update_category(db, category)

@app.delete("/category/{id}")
def delete_category(id: int, db: Session = Depends(get_db)):
    return crud.delete_category(db, id)



@app.get("/products/", response_model=List[schemas.Product])
def get_products(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    products = crud.get_products(db, skip, limit)
    return ProductList_ModelToSchema(products)

@app.get("/product/{id}")
def get_product(id: int, db: Session = Depends(get_db)):
    product = crud.get_product_by_id(db, id)
    return product

@app.post("/product/")
def create_product(product: schemas.ProductCreate, db: Session = Depends(get_db)):
    return crud.create_product(db, product)

@app.put("/product/")
def update_product(product: schemas.ProductUpdate, db: Session = Depends(get_db)):
    return crud.update_product(db, product)

@app.delete("/product/{id}")
def delete_product(id: int, db: Session = Depends(get_db)):
    return crud.delete_product(db, id)



def Product_ModelToSchema(model: models.Product):
    return schemas.Product(
        id=model.id,
        name= model.name,
        category=model.category_value.name,
        price=model.price,
        serie=model.serie
    )

def ProductList_ModelToSchema(modelList: List[models.Product]):
    schemaList = []
    for product in modelList:
        schemaList.append(Product_ModelToSchema(product))
    return schemaList

