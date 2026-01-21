import module_t

def func_s():
    print("Function in module_s called")
    module_t.func_t()

if __name__ == "__main__":
    print("Running module_s")
    func_s()
