import module_l

def func_k():
    print("Function in module_k called")
    module_l.func_l()

if __name__ == "__main__":
    print("Running module_k")
    func_k()
