from typing import List, Union

from pydantic import BaseModel

#Properties common when creating a new category and when reading it
class CategoryBase(BaseModel):
    name: str

#Properties that only are needed when creating a new category
class CategoryCreate(CategoryBase):
    pass

#Properties that only are needed when creating a new category
class CategoryUpdate(CategoryBase):
    id: int

#Properties that only are needed when reding from a request
class Category(CategoryBase):
    id: int
    class Config:
        orm_mode = True


class ProductBase(BaseModel):
    name: str
    category:str
    price: float
    serie: int

class ProductCreate(ProductBase):
    pass

class ProductUpdate(ProductBase):
    id: int


class Product(ProductBase):
    id: int
    class Config:
        orm_mode = True