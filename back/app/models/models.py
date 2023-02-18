from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, NUMERIC
from sqlalchemy.orm import relationship

from ..db.database import Base


class Category(Base):
    __tablename__ = "category"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)

    products = relationship("Product", back_populates="category_value")


class Product(Base):
    __tablename__ = "product"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    category = Column(Integer, ForeignKey("category.id"))
    price = Column(NUMERIC)
    serie = Column(Integer)
    
    category_value = relationship("Category", back_populates="products")