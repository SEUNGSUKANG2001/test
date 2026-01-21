import module_j

def func_i():
    print("Function in module_i called")
    module_j.func_j()

if __name__ == "__main__":
    print("Running module_i")
    func_i()
