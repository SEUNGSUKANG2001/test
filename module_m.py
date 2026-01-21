import module_a

def func_m():
    print("Function in module_m called")
    module_a.func_a()

if __name__ == "__main__":
    print("Running module_m")
    func_m()
