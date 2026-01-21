import module_c

def func_b():
    print("Function in module_b called")
    module_c.func_c()

if __name__ == "__main__":
    print("Running module_b")
    func_b()
