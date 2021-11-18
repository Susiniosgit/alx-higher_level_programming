#!/usr/bin/python3
if __name__ == '__main__':
    import hidden_4
    for search_names in dir(hidden_4):
        if '__' not in search_names:
            print(search_names)
