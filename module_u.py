import module_v

def func_u():
    print("Function in module_u called")
    module_v.func_v()

if __name__ == "__main__":
    print("Running module_u")
    func_u()
