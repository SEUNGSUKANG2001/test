import module_n

def func_m():
    print("Function in module_m called")
    module_n.func_n()

if __name__ == "__main__":
    print("Running module_m")
    func_m()
