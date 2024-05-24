fn main() {
    twelve_days_of_christmas();
}

fn twelve_days_of_christmas() {
    let gifts: [&str; 12] = [
        "a Partridge in a Pear Tree.",
        "two Turtle Doves",
        "three French Hens",
        "four Calling Birds",
        "five Gold Rings",
        "six Geese a Laying",
        "seven Swans a Swimming",
        "eight Maids a Milking",
        "nine Ladies Dancing",
        "ten Lords a Leaping",
        "eleven Pipers Piping",
        "twelve Drummers Drumming",
    ];

    let days: [&str; 12] = [
        "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth",
        "tenth", "eleventh", "twelfth",
    ];

    for i in 0..12 {
        println!(
            "On the {} day of Christmas my true love sent to me:",
            days[i]
        );
        if i > 0 {
            for j in (1..=i).rev() {
                println!("{}", gifts[j]);
            }
            println!("and {}", gifts[0]);
        } else {
            println!("{}", gifts[0]);
        }
        println!(); // Blank line for readability between days
    }
}
