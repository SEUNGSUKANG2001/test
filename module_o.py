import module_p

def func_o():
    print("Function in module_o called")
    module_p.func_p()

if __name__ == "__main__":
    print("Running module_o")
    func_o()
