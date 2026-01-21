import module_q

def func_p():
    print("Function in module_p called")
    module_q.func_q()

if __name__ == "__main__":
    print("Running module_p")
    func_p()
