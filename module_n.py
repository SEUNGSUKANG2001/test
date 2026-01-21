import module_o

def func_n():
    print("Function in module_n called")
    module_o.func_o()

if __name__ == "__main__":
    print("Running module_n")
    func_n()
