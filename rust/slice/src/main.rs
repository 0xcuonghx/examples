fn main() {
    let mut s = String::from("hello world");
   	
    let hello = &s[0..5];
    let world = &s[6..11];

	s.clear(); // error because hello, world sill reference and used later
    println!("{hello} {world}");
}
