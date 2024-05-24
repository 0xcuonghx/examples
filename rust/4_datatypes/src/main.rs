// fn main() {
//     // need types annotation
//     let guess: u32 = "42".parse().expect("Not a number!");
//     // don't need
//     let guess_ = 42;
// }

fn main() {
    let y = {
        let x = 3;
        "a"
    };

    println!("The value of y is: {y}");
}
