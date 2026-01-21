import module_w

def func_v():
    print("Function in module_v called")
    module_w.func_w()

if __name__ == "__main__":
    print("Running module_v")
    func_v()
