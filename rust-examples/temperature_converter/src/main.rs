fn main() {
    let celsius: i128 = 32;
    println!("{celsius} C equal {} F", celsius_to_fahrenheit(celsius));

    let fahrenheit = -128;
    println!(
        "{fahrenheit} F equal {} C",
        fahrenheit_to_celsius(fahrenheit)
    );
}

fn fahrenheit_to_celsius(fahrenheit: i128) -> i128 {
    5 * (fahrenheit - 32) / 9
}

fn celsius_to_fahrenheit(celsius: i128) -> i128 {
    (celsius * 9) / 5 + 32
}
