
// ***print month using switch***

var month = 13;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Feburary");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
    default:
        console.log("Invalid month");
        
  }
// ***Grade system ***

var grade=90;

switch (true)
{
    case (grade>=80&&grade<=90):
        console.log(`Grade A`);
        break;
        case (grade>=60&&grade<=79):
            console.log(`Grade B`);
            break;
            case (grade>=45&&grade<=59):
                console.log(`Grade C`);
                break;
                case (grade<45):
                    console.log(`Grade D`);
                    break;
                    default:
                        console.log(`Invalid Marks`);
                        
            
}