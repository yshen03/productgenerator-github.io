
var names;
var order = 4;
var ngrams = {};
var beginnings = [];
var button;
var step;

names = [
  "	A written or printed work consisting of pages glued or sewn together along one side and bound in covers.	"	,
  "	A tough elastic polymeric substance made from the latex of a tropical plant or synthetically.	"	,
  "	A waterbird with a broad blunt bill, short legs, webbed feet, and a waddling gait.	"	,
  "	An instrument for writing or drawing with ink, typically consisting of a metal nib or ball, or a nylon tip, fitted into a metal or plastic holder.	"	,
  "	A sweet food made with sugar or syrup combined with fruit, chocolate, or nuts.	"	,
  "	A piece of paper, plastic, or foil covering and protecting something sold.	"	,
  "	A piece of furniture for sleep or rest, typically a framework with a mattress and coverings.	"	,
  "	Tending or designed to stick to things on contact or covered with something that sticks.	"	,
  "	A brief record of facts, topics, or thoughts, written down as an aid to memory.	"	,
  "	A strong, coarse unbleached cloth made from hemp, flax, cotton, or a similar yarn, used to make items such as sails and tents and as a surface for oil painting.	"	,
  "	A very fine slender piece of metal with a point at one end and a hole or eye for thread at the other, used in sewing.	"	,
  "	The lower surface of a room, on which one may walk.	"	,
  "	A soft white limestone (calcium carbonate) formed from the skeletal remains of sea creatures.	"	,
  "	The seed-bearing part of a plant, consisting of reproductive organs (stamens and carpels) that are typically surrounded by a brightly colored corolla (petals) and a green calyx (sepals).	"	,
  "	A piece of thick, stiff paper or thin pasteboard, in particular one used for writing or printing on.	"	,
  "	The transmission and reception of electromagnetic waves of radio frequency, especially those carrying sound messages.	"	,
  "	A sharp-prowed, flat-bottomed New England sailboat, with one or two masts each rigged with a triangular sail.	"	,
  "	A substance or appliance used to improve or maintain something's condition.	"	,
  "	A covering for the foot, typically made of leather, having a sturdy sole and not reaching above the ankle.	"	,
  "	A substance which removes or conceals unpleasant smells, especially bodily odors.	"	,
  "	A pair of lenses set in a frame resting on the nose and ears, used to correct or assist defective eyesight or protect the eyes.	"	,
  "	A comfortable slip-on shoe that is worn indoors.	"	,
  "	A loose granular substance, typically pale yellowish brown, resulting from the erosion of siliceous and other rocks and forming a major constituent of beaches, riverbeds, the seabed, and deserts.	"	,
  "	Material manufactured in thin sheets from the pulp of wood or other fibrous substances, used for writing, drawing, or printing on, or as wrapping material.	"	,
  "	An implement with two or more prongs used for lifting food to the mouth or holding it when cutting.	"	,
  "	A small tray or mat placed under a bottle or glass to protect the table underneath.	"	,
  "	A small bowl-shaped container for drinking from, typically having a handle.	"	,
  "	A large keyboard musical instrument with a wooden case enclosing a soundboard and metal strings, which are struck by hammers when the keys are depressed. The strings' vibration is stopped by dampers when the keys are released and can be regulated for length and volume by two or three pedals.	"	,
  "	The round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh. Many varieties have been developed as dessert or cooking fruit or for making cider.	"	,
  "	Woven or felted fabric made from wool, cotton, or a similar fiber.	"	,
  "	Any of the fine threadlike strands growing from the skin of humans, mammals, and some other animals.	"	,
  "	An implement with a handle, consisting of bristles, hair, or wire set into a block, used for cleaning or scrubbing, applying a liquid or powder to a surface, arranging the hair, or other purposes.	"	,
  "	A cylinder or block of wax or tallow with a central wick that is lit to produce light as it burns.	"	,
  "	The star around which the earth orbits.	"	,
  "	A pair of lenses set in a frame resting on the nose and ears, used to correct or assist defective eyesight or protect the eyes.	"	,
  "	A round, deep dish or basin used for food or liquid.	"	,
  "	A container made of flexible material with an opening at the top, used for carrying things.	"	,
  "	(of an event, action, or process) come to an end; cease to happen.	"	,
  "	An object, quality, or event whose presence or occurrence indicates the probable presence or occurrence of something else.	"	,
  "	A road vehicle, typically with four wheels, powered by an internal combustion engine and able to carry a small number of people.	"	,
  "	Either of the two fleshy parts which form the upper and lower edges of the opening of the mouth.	"	,
  "	Shine or luster on a smooth surface.	"	,
  "	A small metal spike with a broadened flat head, driven typically into wood with a hammer to join things together or to serve as a peg or hook.	"	,
  "	An instrument for cutting or trimming small pieces off things.	"	,
  "	A long upholstered seat with a back and arms, for two or more people.	"	,
  "	A main division of a book, typically with a number or title.	"	,
  "	A written or printed work consisting of pages glued or sewn together along one side and bound in covers.	"	,
  "	A device that automatically regulates temperature, or that activates a device when the temperature reaches a certain point.	"	,
  "	A small metal spike with a broadened flat head, driven typically into wood with a hammer to join things together or to serve as a peg or hook.	"	,
  "	A folder or box for holding loose papers that are typically arranged in a particular order for easy reference.	"	,
  "	A woman's loose upper garment resembling a shirt, typically with a collar, buttons, and sleeves.	"	,
  "	An electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program.	"	,
  "	A tough elastic polymeric substance made from the latex of a tropical plant or synthetically.	"	,
  "	A flat, thin strip or loop of material put around something, typically to hold it together or to decorate it.	"	,
  "	An implement consisting of a small, shallow oval or round bowl on a long handle, used for eating, stirring, and serving food.	"	,
  "	A mechanical or electrical device for measuring time, indicating hours, minutes, and sometimes seconds, typically by hands on a round dial or by displayed figures.	"	,
  "	A means of compressing a sound sequence into a very small file, to enable digital storage and transmission.	"	,
  "	A person taking part in a sport or game.	"	,
  "	A thing made or used for sitting on, such as a chair or stool.	"	,
  "	A strip of leather or other material worn around the waist or across the chest, especially in order to support clothes or carry weapons.	"	,
  "	Universal serial bus, a standardized technology for attaching peripheral devices to a computer.	"	,
  "	Operate and control the direction and speed of a motor vehicle.	"	,
  "	A knot tied with two loops and two loose ends, used especially for tying shoelaces and decorative ribbons.	"	,
  "	Any of the five digits at the end of the human foot.	"	,
  "	A small circular band, typically of precious metal and often set with one or more gemstones, worn on a finger as an ornament or a token of marriage, engagement, or authority.	"	,
  "	Move or jump suddenly or rapidly upward or forward.	"	,
  "	A hard or padded protective hat, various types of which are worn by soldiers, police officers, firefighters, motorcyclists, athletes, and others.	"	,
  "	A piece of thick absorbent cloth or paper used for drying oneself or wiping things dry.	"	,
  "	A strip of leather, cardboard, or other material used to mark one's place in a book.	"	,
  "	The invisible gaseous substance surrounding the earth, a mixture mainly of oxygen and nitrogen.	"	,
  "	A substance or device that makes something fresher or cleaner.	"	,
  "	A small pool of liquid, especially of rainwater on the ground.	"	,
  "	A paste used on a toothbrush for cleaning the teeth.	"	,
  "	A separate seat for one person, typically with a back and four legs.	"	,
  "	A refrigerator.	"	,
  "	A floor covering of thick woven material or animal skin, typically not extending over the entire floor.	"	,
  "	A small circular band, typically of precious metal and often set with one or more gemstones, worn on a finger as an ornament or a token of marriage, engagement, or authority.	"	,
  "	An opaque white fluid rich in fat and protein, secreted by female mammals for the nourishment of their young.	"	,
  "	A container with a flat base and sides, typically square or rectangular and having a lid.	"	,
  "	A garment for the upper body made of cotton or a similar fabric, with a collar, sleeves, and buttons down the front.	"	,
  "	A brightly colored rubber sac inflated with air and then sealed at the neck, used as a children's toy or a decoration.	"	,
  "	A framework of spaced bars that are parallel to or cross each other; a grating.	"	,
  "	Material manufactured in thin sheets from the pulp of wood or other fibrous substances, used for writing, drawing, or printing on, or as wrapping material.	"	,
  "	A synthetic material made from a wide range of organic polymers such as polyethylene, PVC, nylon, etc., that can be molded into shape while soft and then set into a rigid or slightly elastic form.	"	,
  "	An implement with two or more prongs used for lifting food to the mouth or holding it when cutting.	"	,
  "	An instrument for writing or drawing, consisting of a thin stick of graphite or a similar substance enclosed in a long thin piece of wood or fixed in a metal or plastic case.	"	,
  "	Material manufactured in thin sheets from the pulp of wood or other fibrous substances, used for writing, drawing, or printing on, or as wrapping material.	"	,
  "	Decisively put an end to.	"	,
  "	A narrow strip of material, typically used to hold or fasten something.	"	,
  "	A current medium of exchange in the form of coins and banknotes; coins and banknotes collectively.	"	,
  "	A pipe or hole through which water or gas may escape.	"	,
  "	A person or thing that directs or regulates something.	"	,
  "	A tool with a broad flat blade and typically upturned sides, used for moving coal, earth, snow or other material.	"	,
  "	A small rodent that typically has a pointed snout, relatively large ears and eyes, and a long tail.	"	,
  "	A thick piece of soft material used to reduce friction or jarring, enlarge or change the shape of something, or hold or absorb liquid.	"	,
  "	A decorative container, typically made of glass or china and used as an ornament or for displaying cut flowers.	"	,
  "	Each of the limbs on which a person or animal walks and stands.	"	,
  "	A device for warming something; a thing that warms.	"	,
  "	A small model of a human figure, typically one of a baby or girl, used as a child's toy.	"	,
  "	A loud, deep, resonant sound.	"	,
  "	A container with a flat base and sides, typically square or rectangular and having a lid.	"	,
  "	A rectangular cloth bag stuffed with feathers, foam rubber, or other soft materials, used to support the head when lying down.	"	,
  "	A book of blank checks with a register for recording checks written.	"	,
  "	A woody perennial plant, typically having a single stem or trunk growing to a considerable height and bearing lateral branches at some distance from the ground.	"	,
  "	A light shoe with either an openwork upper or straps attaching the sole to the foot.	"	,
  "	Give out steady light without flame.	"	,
  "	A thin piece of wood that has fallen or been cut from a tree.	"	,
  "	A small piece of partly burned coal or wood that has stopped giving off flames but still has combustible matter in it.	"	,
  "	A large solid piece of hard material, especially rock, stone, or wood, typically with flat surfaces on each side.	"	,
  "	A liquid preparation containing detergent or soap for washing the hair.	"	,
  "	Trousers.	"	,
  "	A small sweet cake, typically round and flat and having a crisp or chewy texture.	"	,
  "	A wide-mouthed cylindrical container made of glass or pottery, especially one used for storing food.	"	,
  "	A colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain and is the basis of the fluids of living organisms.	"	,
  "	A container, typically made of glass or plastic and with a narrow neck, used for storing drinks or other liquids.	"	,
  "	A women's garment, typically made of translucent nylon or silk, that fits closely over the foot and is held up by garters or an elasticized strip at the upper thigh.	"	,
  "	A small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws. It is widely kept as a pet or for catching mice, and many breeds have been developed.	"	,
  "	A brace, band, or clasp used for strengthening or holding things together.	"	,
  "	A tornado.	"	,
  "	The action or process of packing something.	"	,
  "	A short, slender, sharp-pointed metal pin with a raised helical thread running around it and a slotted head, used to join things together by being rotated so that it pierces wood or other material and is held tightly in place.	"	,
  "	Feel or cause to feel in need of rest or sleep.	"	,
  "	Move or cause to move back and forth or from side to side while suspended or on an axis.	"	,
  "	A container, typically made of glass or plastic and with a narrow neck, used for storing drinks or other liquids.	"	,
  "	A small area of still water, typically one formed naturally.	"	,
  "	A thin piece of wood that has fallen or been cut from a tree.	"	,
  "	An ornamental band, hoop, or chain worn on the wrist or arm.	"	,
  "	A large piece of woolen or similar material used as a bed covering or other covering for warmth.	"	,
  "	Situated far from the main centers of population; distant.	"	,
  "	The front part of a person's head from the forehead to the chin, or the corresponding part in an animal.	"	,
  "	Clean with water and, typically, soap or detergent.	"	,
  "	A food preparation in the form of a paste or solid block made from roasted and ground cacao seeds, typically sweetened.	"	,
  "	A flat dish, typically circular and made of china, from which food is eaten or served.	"	,
  "	A system for transmitting visual images and sound that are reproduced on screens, chiefly used to broadcast programs for entertainment, information, and education.	"	,
  "	A device for recording visual images in the form of photographs, film, or video signals.	"	,
  "	A piece of cloth or similar material, typically oblong or square, attachable by one edge to a pole or rope and used as the symbol or emblem of a country or institution or as a decoration during public festivities.	"	,
  "	A small room in which a prisoner is locked up or in which a monk or nun sleeps.	"	,
  "	A telephone.	"	,
  "	A stiff, sticky fine-grained earth, typically yellow, red, or bluish-gray in color and often forming an impermeable layer in the soil. It can be molded when wet, and is dried and baked to make bricks, pottery, and ceramics.	"	,
  "	A container, typically rounded or cylindrical and of ceramic ware or metal, used for storage or cooking.	"

];


function setup() {
  noCanvas();
  for (var j = 0; j < names.length; j++) {
    var txt = names[j];
    for (var i = 0; i <= txt.length - order; i++) {
      var gram = txt.substring(i, i + order);
      if (i == 0) {
        beginnings.push(gram);
      }

      if (!ngrams[gram]) {
        ngrams[gram] = [];
      }
      ngrams[gram].push(txt.charAt(i + order));
    }
  }
  //button = createButton('generate');
  //button.mousePressed(markovIt);

  //console.log(ngrams);
  step = 800

  function myFunction() {
   step = document.getElementById("myRange").value;
   window.location.reload();
}

  markovIt()
  var int=self.setInterval(function(){  // 这个方法是说在延迟两秒后执行大括号里的方法
      markovIt();
      window.scrollTo(0, document.documentElement.clientHeight); // 这个方法是刷新当前页面
    },step)
  // window.location.reload()
}
//function stop{
  //step = step*100;



function markovIt() {
for (var a= 0 ; a < 1 ; a++) {
  var currentGram = random(beginnings);
  var result = currentGram;

    for (var i = 0; i < 200; i++) {
      var possibilities = ngrams[currentGram];
      if (!possibilities) {
        break;
      }
      var next = random(possibilities);
      result += next;
      var len = result.length;
      currentGram = result.substring(len - order, len);
    }
    createP(result);

}

}
