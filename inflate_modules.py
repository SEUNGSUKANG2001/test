import os

def inflate_file(filepath, num_prints=500):
    if not os.path.exists(filepath):
        print(f"File {filepath} not found.")
        return

    with open(filepath, 'r') as f:
        lines = f.readlines()

    # Find the function definition or the 'if __name__ == "__main__":' block
    # We'll insert inside the func_X() function for maximum visual impact in code viewers
    insert_pos = -1
    for i, line in enumerate(lines):
        if line.strip().startswith("def func_"):
            insert_pos = i + 1
            break
    
    if insert_pos == -1:
        # Fallback to top level if no function found
        insert_pos = 0

    inflation_lines = [f'    print("Meaningless statement {i+1} in {os.path.basename(filepath)}")\n' for i in range(num_prints)]
    
    # If inserting at top level, remove indentation
    if insert_pos == 0:
        inflation_lines = [line.lstrip() for line in inflation_lines]

    new_lines = lines[:insert_pos] + inflation_lines + lines[insert_pos:]

    with open(filepath, 'w') as f:
        f.writelines(new_lines)
    
    print(f"Inflated {filepath} with {num_prints} lines.")

def main():
    base_dir = r"c:\Users\seungsu\test\test"
    modules = [f"module_{chr(i)}.py" for i in range(ord('a'), ord('w') + 1)]
    
    for module in modules:
        filepath = os.path.join(base_dir, module)
        inflate_file(filepath)

if __name__ == "__main__":
    main()
