import module_f

def func_e():
    print("Function in module_e called")
    module_f.func_f()

if __name__ == "__main__":
    print("Running module_e")
    func_e()
