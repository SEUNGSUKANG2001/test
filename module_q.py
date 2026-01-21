import module_r

def func_q():
    print("Function in module_q called")
    module_r.func_r()

if __name__ == "__main__":
    print("Running module_q")
    func_q()
