import module_a

def func_b():
    print("Function in module_b called")

if __name__ == "__main__":
    print("Running module_b")
    module_a.func_a()
