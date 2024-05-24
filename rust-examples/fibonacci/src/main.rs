fn main() {
    println!("{}", fibonacci(0));
    println!("{}", fibonacci(1));
    println!("{}", fibonacci(10));
}

fn fibonacci(n: i128) -> i128 {
    if n == 0 {
        0
    } else if n == 1 {
        1
    } else {
        fibonacci(n - 1) + fibonacci(n - 2)
    }
}
