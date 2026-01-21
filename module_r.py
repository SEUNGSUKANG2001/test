import module_s

def func_r():
    print("Function in module_r called")
    module_s.func_s()

if __name__ == "__main__":
    print("Running module_r")
    func_r()
