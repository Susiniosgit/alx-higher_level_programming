#!/usr/bin/python3
class Square:
    """Class of the square"""
    def __init__(self, size=0):
        """self.__size = size"""
        if type(size) is not int:
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        else:
            self.__size = size
    def area(self):
        """Current square area"""
        return self.__size ** 2
