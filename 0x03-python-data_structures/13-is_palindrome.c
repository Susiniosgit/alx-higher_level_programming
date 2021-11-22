#include "lists.h"
/**
 * is_palindrome - checks if a singly inked list is a palindrome
 * @head: a double pointer to the head of a linked list
 * Return: 0 if is not palindrome and 1 if its palindrome
 */
int is_palindrome(listint_t **head)
{
	listint_t *rove_list = *head;
	int size, index, buffer[2048];

	size = 0;
	index = 0;
	if (!(*head) || !rove_list->next)
		return (1);
	while (rove_list)
	{
		/* save in buffer the size of content of he list */
		buffer[size] = rove_list->n;
		rove_list = rove_list->next;
		size++;
	}
	/* compare the list from the ends to the middle */
	while (size >= index)
	{
		if (buffer[index] != buffer[size - 1])
			return (0);
		/* e.g index + 1 is node(1)*/
		/* size = 11 (with null) -1 is position buffer at 10 */
		/* which is node(1) */
		size--;
		index++;
	}
	return (1);
}
