from sqlalchemy.orm import Session

from ..models import models, schemas

def get_categories(db: Session, skip: int = 0, limit: int = 100):
   return db.query(models.Category).offset(skip).limit(limit).all()

def get_category_by_id(db: Session, id: int):
   return db.query(models.Category).filter(models.Category.id == id).first()

def create_category(db: Session, category: schemas.CategoryCreate):
    db_category = models.Category(**category.dict())
    try:
        db.add(db_category)
    except:
        db.rollback()
        raise
    else:
        db.commit()
        db.refresh(db_category)
    return db_category

def update_category(db: Session, category: schemas.CategoryUpdate):
    db_category = models.Category(**category.dict())
    try:
        db.query(models.Category).filter(models.Category.id == category.id).update({'name':db_category.name})
    except:
        db.rollback()
        raise
    else:
        db.commit()

def delete_category(db: Session, id: int):
    try:
        db.query(models.Category).filter(models.Category.id == id).delete()
    except:
        raise
    else:
        db.commit()


def get_products(db: Session, skip: int = 0, limit: int = 100):
   return db.query(models.Product).offset(skip).limit(limit).all()

def get_product_by_id(db: Session, id: int):
   return db.query(models.Product).filter(models.Product.id == id).first()

def create_product(db: Session, product: schemas.ProductCreate):
    db_product = models.Product(**product.dict())
    try:
        db.add(db_product)
    except:
        db.rollback()
        raise
    else:
        db.commit()
        db.refresh(db_product)
    return db_product

def update_product(db: Session, product: schemas.ProductUpdate):
    
    db_product = models.Product(**product.dict())
    try:
        db.query(models.Product).filter(models.Product.id == db_product.id).update({
            'name':db_product.name,
            'category':db_product.category,
            'price':db_product.price,
            'serie':db_product.serie
        })
    except:
        db.rollback()
        raise
    else:
        db.commit()
    return db_product

def delete_product(db: Session, id: int):
    try:
        db.query(models.Product).filter(models.Product.id == id).delete()
    except:
        raise
    else:
        db.commit()

