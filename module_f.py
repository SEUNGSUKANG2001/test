import module_g

def func_f():
    print("Function in module_f called")
    module_g.func_g()

if __name__ == "__main__":
    print("Running module_f")
    func_f()
