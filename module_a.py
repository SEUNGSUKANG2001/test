import module_b

def func_a():
    print("Function in module_a called")
    module_b.func_b()

if __name__ == "__main__":
    print("Running module_a")
    func_a()
