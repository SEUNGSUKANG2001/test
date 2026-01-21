import module_k

def func_j():
    print("Function in module_j called")
    module_k.func_k()

if __name__ == "__main__":
    print("Running module_j")
    func_j()
