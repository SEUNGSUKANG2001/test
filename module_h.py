import module_i

def func_h():
    print("Function in module_h called")
    module_i.func_i()

if __name__ == "__main__":
    print("Running module_h")
    func_h()
