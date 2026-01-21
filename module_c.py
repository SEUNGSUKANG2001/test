import module_d

def func_c():
    print("Function in module_c called")
    module_d.func_d()

if __name__ == "__main__":
    print("Running module_c")
    func_c()
