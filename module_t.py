import module_u

def func_t():
    print("Function in module_t called")
    module_u.func_u()

if __name__ == "__main__":
    print("Running module_t")
    func_t()
