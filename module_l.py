import module_m

def func_l():
    print("Function in module_l called")
    module_m.func_m()

if __name__ == "__main__":
    print("Running module_l")
    func_l()
