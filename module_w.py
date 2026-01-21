import module_a

def func_w():
    print("Function in module_w called")
    module_a.func_a()

if __name__ == "__main__":
    print("Running module_w")
    func_w()
