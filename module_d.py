import module_e

def func_d():
    print("Function in module_d called")
    module_e.func_e()

if __name__ == "__main__":
    print("Running module_d")
    func_d()
