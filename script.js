
// Word List
let word_list = ["ใหญ่","ชอบ","หญิง","ชาย","แฟน","กิน","ทำไม","รัก","ภรรยา","สามี","นอน","เที่ยว","ฝัน","การ","งาน","เวลา","นาฬิกา","สุข","ความ","เป็น","อร่อย","เค็ม","เปรี้ยว","หวาน","เพราะ","ร้องเพลง","เข็มทิศ","ขอ","นาน","มาก","เขียว","สี","ฟ้า","ท้อง","โรค","ไม่สบาย","สบาย","อิ่ม","หิว","อ่าน","เขียน","ไป","ขำ","หัวเราะ","เกม","หนังสือ","ประยุทธ์","พิธา","ไทย","วัฒนธรรม","ประเพณี","ปวดหัว","หัว","ศอก","น้ำ","น้ำลาย","ขี้มูก","เพื่อน","สนิท","จน","รวย","เงิน","ธนาคาร","ต้อง","ฟัง","ครับ","ผม","ได้","ใช่","ปัญหา","ไม่ใช่","ไม่","ให้","ไม่ให้","อาชีพ","เรียน","ช่วง","แรก","เลข","ที","วิธี","ตัว","มึง","กู","คน","ด้วย","โอเค","จังหวัด","ประเทศ","อังกฤษ","รู้","โทรศัพท์","โทร","เลิก","ง้อ","ต่าง","ยื้อ","คบ","อยาก","แต่","เล่า","เบียร์","เหล้า","ต่อ","เดิม","เห็น","แก่","พระ","ผัก","ถูก","แพง","แปซิฟิก","ประชากร","คดี","หาก","เรา","แม่น้ำ","เย็น","ร้อน","หนาว","อ้วก","ท้อง","ปวด","พยาบาล","หมอ","เข้า","ท้องเสีย","อาเจียน","เลือกตั้ง","คืน","ค่ำ","หนัก","สาเหตุ","ขี้","บิน","ฉี่","กลิ่น","เหม็น","หอม","ควร","ลด","สูง","เตี้ย","แผน","อากาศ","ไลน์","เฟสบุ๊ค","ไอจี","ปี","ยาว","สั้น","ผี","หนัง","ระเบิด","เกิด","ใหม่","เก่า","องศา","อีกา","ปากแห้ง","แรง","ฟิสิกส์","สะกด","คำ","ต้อง","ห้าม","มอ","มหาลัย","รถ","เดิน","กระหาย","ร่าง","ร่างกาย","มั่ว","แสง","ไฟ","ลม","ดิน","หิน","ทราย","วะ","ค่ะ","มัน","นะ","แค่","วัน","เดือน","ที่ไหน","ที่","ไม่รู้","อยู่","กำลัง","หา","อัจฉริยะ","ป้องกัน","หลีกเลี้ยง","ดื่ม","ยก","ซด","แซลมอน","ปาร์ตี้","ข้าว","อาหาร","ยัง","พุทธ","เณร","บวช","ดี","ขึ้น","ซื้อ","ขาย","ขน","ย้าย","ขับ","ทำงาน","ไฝ","น่ารัก","สวย","หล่อ","เซ็กซี่","โรงเรียน","ศพ","โลง","กลัว","แวน","วิน","จุฬา","ธรรมศาสตร์","มหิดล","เกษตร","บัญชี","บริหาร","การเมือง","เมือง","พ่อ","แม่","ปุ่","ย่า","ตา","ยาย","อะไร","ว่า","รำคาญ","ห๊ะ","ทำ","อังคาร","จันทร์","พุธ","พฤหัส","ศุกร์","เสาร์","อาทิตย์","กำแพง","แมลง","หมา","แมว","กุ้ง","รู","ใจ","เล่น","ม้า","วัว","ลิง","มด","สวัสดี","มา","ลา","อา","ตาม","งาม","ลายมือ","ปาก","ปากกา","ดินสอ","ยางลบ","แก้ว","ขวด","เป่า","ตรวจ","ด่าน","ติด","บันได","ขนม","ตาย","แพ้","ชนะ","รู้สึก","ชัดเจน","นอกใจ","ทินเดอร์","ปัด","ศึกษา","สวดมนต์","อา","อาจารย์","ครู","นัก","นักเรียน","กบเหลาดินสอ","สัตว์","ซื่อสัตย์","กรรม","ศีล","อ้วก","เมา","เขา","ภูเขา","ทะเล","ต่างประเทศ","คณะ","แพทย์","ปลา","ยา","เหตุผล","เหมือน","ภาษา","ทนาย","ผู้พิพากษา","ศาล","ตัดสิน","คอม","ประจำ","งมงาย","ต่อย","ตี","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];

const change_word_button = document.getElementById('word-container');
const word = document.getElementById('word');
const loader = document.getElementById('loader');
// loading Section
// Show loading
function loading() {
    loader.hidden = false;
    word.hidden = true;
}
// Hide Loading
function complete() {
    loader.hidden = true;
    word.hidden = false;
}
// SleepFunction
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

change_word_button.addEventListener("click",change_word);

async function change_word() {
    loading();
    let random_word = word_list[Math.floor(Math.random() * word_list.length)]
    console.log(random_word);
    word.innerHTML = random_word;
    await sleep(300);
    complete();
}

