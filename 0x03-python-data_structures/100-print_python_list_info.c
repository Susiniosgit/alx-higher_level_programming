#include <stdio.h>
#include <Python.h>
#include <stdlib.h>
#include <object.h>
#include <listobject.h>

/**
* print_python_list_info - Prints list info python objects
* @p: Pointer to object
*/

void print_python_list_info(PyObject *p)
{
	Py_ssize_t len, i = 0;
	/**int i = 0, len;*/
	len = PyList_Size(p);
	PyObject *o1;
	PyTypeObject *o2;

/**ntf("[*] Size he Python list = %lu\n", ((PyVarObject *)p)->ob_size);*/

	printf("[*] Size of the Python List = %lu\n", len);
	printf("[*] Allocated = %lu\n", ((PyListObject *)p)->allocated);

	while (i < len)
	{
		o1 = PyList_GetItem(p, i);
/**		(PyObject *)o2 = o1;*/
		o2 = Py_TYPE(o1);
		printf("Element %lu: %s\n", i, ((PyObject *)o1)->ob_type);
		printf("Element %lu: %s\n", i++, o2->tp_name);
	}
}
