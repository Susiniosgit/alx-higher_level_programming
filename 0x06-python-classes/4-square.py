#!/usr/bin/python3
class Square:
    """Class of the square"""
    def __init__(self, size=0):
        """Init self"""
        self.__size = size
    @property
    def size(self):
        return self.__size
    @size.setter
    def size(self, value):
        """Conditions"""
        if type(value) is not int:
            raise TypeError("size must be an integer")
        elif value < 0:
            raise ValueError("size must be >= 0")
        else:
            self.__size = value

    def area(self):
        """Current square area"""
        return self.__size ** 2

    """def size(self):
        return self.__size"""
