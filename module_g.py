import module_h

def func_g():
    print("Function in module_g called")
    module_h.func_h()

if __name__ == "__main__":
    print("Running module_g")
    func_g()
