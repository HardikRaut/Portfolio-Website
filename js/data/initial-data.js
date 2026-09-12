/**
 * Initial Central Data Store for Hardik Raut Portfolio
 * Based on Discription.md specifications
 */

export const INITIAL_DATA = {
  config: {
    name: "Hardik Raut",
    title: "Independent Deep-Tech Builder",
    supportingTitle: "Engineer · Researcher · Inventor",
    tagline: "Building experimental technology across space systems, propulsion, robotics, electronics and manufacturing.",
    bio: "I work across space systems, propulsion, robotics, electronics and manufacturing — turning ideas into experiments, prototypes and physical systems.",
    aboutHeading: "I like building things that shouldn't be easy to build.",
    aboutBio: "My formal background is in manufacturing engineering, but the problems I am interested in rarely belong to a single discipline. I move between mechanical design, simulation, electronics, robotics, manufacturing and space systems depending on what needs to be built. Rather than specializing in narrow boundaries, I focus on the end-to-end cycle: understanding the underlying physics, designing mechanisms in CAD, machining and fabricating prototypes, writing embedded firmware, and setting up experimental test rigs to measure what actually happens.",
    email: "hardikrautworkspace08@gmail.com",
    linkedin: "https://www.linkedin.com/in/hardik-raut-09164936b",
    location: "Pune, India",
    currentlyBuilding: "Experimental propulsion systems and compact spacecraft mechanisms.",
    currentlyBuildingDate: "September 2026",
    currentlyThinking: [
      "Space manufacturing",
      "Micropropulsion",
      "Robotics & Kinematics",
      "Advanced manufacturing",
      "Optical computing",
      "AI-assisted engineering"
    ],
    philosophy: {
      headline: "Think. Build. Test. Learn.",
      text: "Most of my work moves through the same cycle: an idea, a sketch, a CAD model, a prototype, a test, a failure and another iteration."
    }
  },

  projects: [
    {
      id: "01",
      slug: "deployable-boom-mechanism",
      title: "A Controlled Retractable Boom Deployer with Dual-Spindle Freewheel Drive",
      projectNumber: "PROJECT 01",
      category: "Space Systems",
      subcategory: "Deployable Mechanisms",
      year: "2026",
      status: "Operational Prototype",
      statusType: "active",
      featured: true,
      heroImage: "assets/images/hero_boom.jpg",
      shortDescription: "A reversible, sensor-free CubeSat boom deployer that uses two freewheel-clutched spindles and a self-tensioning ribbon to extend and retract structures without motors' active feedback.",
      leadQuote: "A reversible, sensor-free CubeSat boom deployer that uses two freewheel-clutched spindles and a self-tensioning ribbon to extend and retract structures without motors' active feedback.",
      overview: "Most CubeSat booms deploy once and never come back — spring-driven, irreversible, and prone to shock loads. This project is a dual-spindle mechanism that deploys and retracts a boom repeatably, using only mechanical clutches and ribbon tension to self-regulate speed and prevent \"blossoming\" — no motors controlling direction, no electronic feedback loop.",
      
      story: {
        problem: `Most CubeSat booms deploy once and never come back — spring-driven, irreversible, and prone to shock loads. Traditional deployers either occupy excessive payload volume, risk catastrophic high-velocity disturbance torques during release, or cannot retract deployed sensors and solar arrays for re-stowage or orbit re-entry.`,
        
        idea: `<p>A dual-spindle mechanism that deploys and retracts a boom repeatably, using only mechanical clutches and ribbon tension to self-regulate speed and prevent blossoming — no motors controlling direction, no electronic feedback loop.</p>
        <p style="margin-top: 1rem; font-weight: 600; color: var(--text-primary);">Key Highlights:</p>
        <ul>
          <li>Mechanically synchronized dual-spindle architecture for fully reversible boom deployment</li>
          <li>Bidirectional freewheel clutches provide passive torque regulation and overspeed protection — no active control needed</li>
          <li>Tension-driven ribbon actuation inherently suppresses boom "blossoming" without compression rollers</li>
          <li>Compact sub-1U footprint (94 × 94 × 41.5 mm), validated through a fully 3D-printed prototype</li>
          <li>Demonstrated 1 metre of repeatable deployment/retraction travel with vibration-free, synchronized motion</li>
        </ul>`,

        engineering: `<p>Two identical spindle assemblies — a Boom Spindle and a Ribbon Spindle — each contain a one-way freewheel clutch made of hinged, spring-loaded drive pins that engage ratchet grooves inside the hub. During deployment, the ribbon spindle winds in, pulling the ribbon and unspooling the boom while the boom spindle freewheels.</p>
        <p>During retraction, the roles reverse: the boom spindle drives and rewinds both boom and ribbon while the ribbon spindle freewheels. Both clutch housings stay geared together at a fixed 2:1 ratio, so the system self-regulates — if either hub tries to spin faster than its housing (overspeed), the pins lock instantly, halting it. The ribbon itself does double duty as both the power-transmission element and the tensioning element, which is what suppresses blossoming without needing rollers or springs.</p>
        <figure class="chapter-media-frame" style="margin-top: 1.75rem;">
          <div class="project-img-frame" style="cursor: zoom-in;" data-img-zoom="assets/images/Boom Deployer/boom-deployer-working-explanation.png">
            <img src="assets/images/Boom Deployer/boom-deployer-working-explanation.png" alt="Dual-Spindle Freewheel Drive Functional Working Explanation" loading="lazy" />
          </div>
          <figcaption style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); margin-top: 0.75rem;">
            How It Works — Dual-Spindle Freewheel Drive kinematic synchronization and clutching architecture
          </figcaption>
        </figure>`,

        design: `<p>Designed in CAD to fit within a 1U CubeSat envelope, the full assembly — dual spindles, redirection shaft, gear train, and boom guide — occupies just 94 × 94 × 41.5 mm. The boom guide is contoured to match the boom's transition from a flattened stowed state to its deployed C-shaped cross-section, minimizing torsional stress.</p>
        <p>The entire prototype was 3D-printed in PLA via FDM directly from CAD geometry with no scaling, validating a clean print-to-functional pipeline.</p>
        <figure class="chapter-media-frame" style="margin-top: 1.75rem;">
          <div class="project-img-frame" style="cursor: zoom-in;" data-img-zoom="assets/images/Boom Deployer/boom-deployer-spindle-design.png">
            <img src="assets/images/Boom Deployer/boom-deployer-spindle-design.png" alt="Central spindle CAD design detailing ratchet grooves and spring-loaded drive pins" loading="lazy" />
          </div>
          <figcaption style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); margin-top: 0.75rem;">
            Design & CAD — Central spindle design with integrated ratchet hub and spring-loaded drive pins
          </figcaption>
        </figure>`,

        building: `Fabricated directly from CAD models using precision FDM 3D printing in PLA. The assembly features an integrated dual-spindle layout, redirection shaft, contoured exit guide, and a 2:1 synchronized gear train connecting the two freewheel clutch housings, validating a direct print-to-functional assembly pipeline.`,

        testing: `<p>The prototype was driven by a NEMA 17 stepper motor (2 A, 1/16 microstepping) and tested with a 1-metre C-section measuring tape standing in for a composite boom.</p>
        <ul>
          <li><strong>Deployment time (1 m):</strong> 2 min 2 sec</li>
          <li><strong>Retraction time (1 m):</strong> 2 min 30 sec</li>
          <li><strong>Overspeed Protection:</strong> Instantaneous clutch engagement under overspeed conditions</li>
          <li><strong>Blossoming Suppression:</strong> Ribbon tension consistently suppressed blossoming during powered operation</li>
        </ul>
        <figure class="chapter-media-frame" style="margin-top: 1.75rem;">
          <div class="project-img-frame" style="cursor: zoom-in;" data-img-zoom="assets/images/Boom Deployer/boom-deployer-prototype.jpg">
            <img src="assets/images/Boom Deployer/boom-deployer-prototype.jpg" alt="Controlled Retractable Boom Deployer 3D-Printed Hardware Prototype" loading="lazy" />
          </div>
          <figcaption style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); margin-top: 0.75rem;">
            Physical Prototype — Sub-1U FDM 3D-printed dual-spindle deployer apparatus during test bench trials
          </figcaption>
        </figure>
        <div class="chapter-videos-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 1.75rem;">
          <figure style="margin: 0;">
            <div class="project-video-frame" style="border-radius: var(--radius-md); overflow: hidden; background: #000; box-shadow: var(--shadow-md); border: var(--glass-border);">
              <video controls preload="metadata" style="width: 100%; display: block; max-height: 340px; object-fit: contain; background: #000;">
                <source src="assets/videos/Boom Deployer/boom-deployer-deployment-test.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
              </video>
            </div>
            <figcaption style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); margin-top: 0.75rem;">
              Deployment Test — 1m automated deployment in 2 min 2 sec
            </figcaption>
          </figure>
          <figure style="margin: 0;">
            <div class="project-video-frame" style="border-radius: var(--radius-md); overflow: hidden; background: #000; box-shadow: var(--shadow-md); border: var(--glass-border);">
              <video controls preload="metadata" style="width: 100%; display: block; max-height: 340px; object-fit: contain; background: #000;">
                <source src="assets/videos/Boom Deployer/boom-deployer-retraction-test.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
              </video>
            </div>
            <figcaption style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); margin-top: 0.75rem;">
              Retraction Test — 1m reverse spooling and boom restowage in 2 min 30 sec
            </figcaption>
          </figure>
        </div>`,

        whatFailed: `A minor unpowered ribbon slack was observed during transition states, traced to small backlash in the pin-ratchet interface.`,

        whatChanged: `Identified refinement path for future iterations: transitioning to continuous roller-ramp or sprag clutches and increasing ratchet groove density to eliminate backlash and prevent unpowered ribbon slack.`,

        currentStatus: `Demonstrated 1 metre of repeatable deployment/retraction travel with vibration-free, synchronized motion and passive overspeed protection.`,

        whatsNext: `Implementation of higher-density roller-ramp freewheel clutches, space-grade material selection (Al 6061-T6 housing and CuBe2 tape), and vacuum chamber thermal-cycling qualification.`
      },

      specs: [
        { label: "Footprint", value: "94 × 94 × 41.5 mm (sub-1U)" },
        { label: "Gear Ratio", value: "2:1 fixed (between clutch housings)" },
        { label: "Fabrication", value: "FDM 3D printing, PLA" },
        { label: "Test Motor", value: "NEMA 17 stepper, 2 A, 1/16 microstepping" },
        { label: "Demonstrated Travel", value: "1 m deployment + retraction" },
        { label: "Deployment Time", value: "2 min 2 sec (1 m)" },
        { label: "Retraction Time", value: "2 min 30 sec (1 m)" },
        { label: "Architecture", value: "Dual-Spindle Freewheel Drive" }
      ],

      gallery: [
        { url: "assets/images/Boom Deployer/boom-deployer-prototype.jpg", caption: "Controlled Retractable Boom Deployer sub-1U functional prototype." },
        { url: "assets/images/Boom Deployer/boom-deployer-working-explanation.png", caption: "Dual-spindle kinematic working explanation and freewheel clutch synchronization." },
        { url: "assets/images/Boom Deployer/boom-deployer-spindle-design.png", caption: "Central spindle CAD design detailing ratchet grooves and spring-loaded drive pins." },
        { url: "assets/images/workbench.jpg", caption: "Engineering bench setup during tape tension calibration." }
      ],

      tags: ["Space Structures", "Deployable Mechanisms", "CubeSat", "Mechanism Design", "FEA/CAD", "FDM Prototyping"]
    },

    {
      id: "02",
      slug: "water-based-satellite-propulsion",
      title: "Water-Based Satellite Propulsion",
      projectNumber: "PROJECT 02",
      category: "Space Systems",
      subcategory: "Propulsion",
      year: "2026",
      status: "Ground Prototype Testing",
      statusType: "active",
      featured: true,
      heroImage: "assets/images/water_propulsion.jpg",
      shortDescription: "An experimental propulsion concept exploring water electrolysis and the use of generated gases as a potential spacecraft propulsion architecture.",
      leadQuote: "Investigating safe, non-toxic, green spacecraft propulsion by utilizing on-demand water electrolysis for impulse generation.",
      overview: "Traditional satellite chemical propellants like hydrazine are highly toxic, expensive to handle, and subject to severe launch range safety restrictions. This experimental ground-use prototype explores using distilled water as an inert, high-density propellant that is split into H2 and O2 gases on demand.",
      
      story: {
        problem: "Small satellites need orbital maneuvering capabilities (collision avoidance, orbit raising, deorbiting) but cannot afford hazardous propellant logistics or pressurized toxic tanks that threaten primary rideshare payloads.",
        idea: "Store propellant as unpressurized, zero-hazard liquid water. Generate stoichiometric hydrogen and oxygen via high-efficiency pulsed PEM electrolysis, store gases in micro-accumulator plenums, and combust/expand through a ceramic micro-nozzle.",
        engineering: "The test rig incorporates a titanium-mesh electrolysis cell, solid polymer electrolyte membrane (PEM), micro-solenoid pulse valves, optical gas bubble sensors, and an embedded microcontroller managing closed-loop pressure regulation up to 4.5 bar.",
        design: "Transparent borosilicate glass inspection ports allow optical diagnostic tracking of gas phase separation at the electrode interfaces. 316L stainless steel micro-tubing and Swagelok instrumentation fittings ensure leak-tight gas containment.",
        building: "Assembled on a precision optical breadboard with calibrated digital pressure transducers, power supply monitoring current density, and an exhaust thrust measurement load cell rig.",
        testing: "Characterized electrolysis rate versus input power, gas generation purity, bubble management under normal gravity, and ignition pulse repeatability in open atmospheric test bench conditions.",
        whatFailed: "Early electrode configurations suffered from bubble coalescing and retention on electrode surfaces, causing resistive power spikes. Standard elastomers degraded rapidly in presence of nascent oxygen.",
        whatChanged: "Switched to textured titanium mesh with platinum-group electrocatalyst and fluoropolymer Viton seals, doubling gas conversion efficiency while maintaining seal integrity.",
        currentStatus: "Ground-use laboratory research prototype. Not currently vacuum-compatible, microgravity-compatible or flight-ready.",
        whatsNext: "Development of microgravity phase separation membrane architectures and high-vacuum micro-thrust stand testing."
      },

      specs: [
        { label: "Propellant", value: "Deionized Water (H2O)" },
        { label: "Architecture", value: "PEM Water Electrolysis + Pulse Expansion" },
        { label: "Electrolysis Voltage", value: "2.1V - 2.8V DC" },
        { label: "Plenum Pressure", value: "1.0 - 4.5 bar (regulated)" },
        { label: "Test Setup", value: "Ambient Ground Test Bench" },
        { label: "Classification", value: "Experimental Laboratory Prototype" }
      ],

      gallery: [
        { url: "assets/images/water_propulsion.jpg", caption: "Electrolysis chamber and gas regulation manifold during gas generation tests." }
      ],

      documents: [
        { name: "Electrolysis Gas Generation Test Report", type: "PDF Report", size: "3.1 MB", filename: "Water_Propulsion_Lab_Report.pdf" },
        { name: "P&ID Schematic & Manifold Drawing", type: "PDF Drawing", size: "1.8 MB", filename: "Propulsion_PID_Schematic.pdf" }
      ],

      tags: ["Space Systems", "Propulsion", "Green Propellants", "Fluidics", "Electrochemistry"]
    },

    {
      id: "03",
      slug: "experimental-micropropulsion",
      title: "Experimental Micropropulsion",
      projectNumber: "PROJECT 03",
      category: "Propulsion",
      subcategory: "Experimental Hardware",
      year: "2025",
      status: "Lab Research",
      statusType: "active",
      featured: true,
      heroImage: "assets/images/micropropulsion.jpg",
      shortDescription: "Experimental work exploring compact electric propulsion and pulse-based plasma generation.",
      leadQuote: "Exploring pulsed plasma discharge physics for sub-millinewton satellite attitude control and precision station keeping.",
      overview: "Electric propulsion delivers orders-of-magnitude higher specific impulse than chemical systems. This project investigates pulsed plasma thruster (PPT) discharge geometries, ceramic nozzle ablation, and solid propellant feed architectures inside a vacuum test apparatus.",
      
      story: {
        problem: "Nano-satellites require precision impulse bits (micro-Newton-seconds) for pointing and fine formation flying that mechanical cold-gas thrusters cannot deliver due to valve timing jitter.",
        idea: "A coaxial pulsed plasma thruster geometry utilizing solid PTFE (Teflon) propellant ablated and ionized by a short microsecond high-voltage spark discharge.",
        engineering: "High-voltage capacitive discharge circuit charging a low-ESR energy storage capacitor bank to 1.2 kV - 1.8 kV, triggered via a semiconductor solid-state switch and spark plug igniter.",
        design: "Constructed with machinable alumina ceramic discharge channels, tungsten discharge pins, and beryllium-copper electrode rails mounted directly to an ISO-K vacuum flange port.",
        building: "Fabricated custom discharge chambers on lathe, integrated Rogowski coils for nanosecond discharge current logging, and mated with vacuum chamber telemetry feedthroughs.",
        testing: "Operated within high-vacuum chamber at 1.8e-6 mbar. Monitored plasma plume emission spectra and capacitive discharge damping curves on digital storage oscilloscopes.",
        whatFailed: "Electrode erosion and carbon soot deposition along ceramic insulators caused intermittent dielectric breakdown and erratic ignition jitter during early multi-pulse tests.",
        whatChanged: "Optimized insulator geometry with shadow-shielding recesses and increased trigger spark energy to stabilize ignition timing to sub-microsecond precision.",
        currentStatus: "Active physics and experimental hardware exploration. Performance specifications remain editable subject to calibrated thrust-stand measurements.",
        whatsNext: "Integration of torsional pendulum micro-thrust balance to measure impulse bit resolution and specific impulse."
      },

      specs: [
        { label: "Propellant Type", value: "Solid Fluoropolymer (PTFE)" },
        { label: "Discharge Voltage", value: "1.2 kV - 1.8 kV (adjustable)" },
        { label: "Vacuum Level", value: "1.8 × 10⁻⁶ mbar test environment" },
        { label: "Discharge Energy", value: "2.5 - 5.0 Joules / pulse" },
        { label: "Ignition Mechanism", value: "High-voltage solid-state trigger" }
      ],

      gallery: [
        { url: "assets/images/micropropulsion.jpg", caption: "Plasma discharge emission plume captured at vacuum port interface." }
      ],

      documents: [
        { name: "Pulsed Plasma Discharge Dynamics Memo", type: "PDF Note", size: "2.4 MB", filename: "PPT_Discharge_Dynamics.pdf" }
      ],

      tags: ["Propulsion", "Plasma Physics", "High Voltage", "Vacuum Testing", "Electric Propulsion"]
    },

    {
      id: "04",
      slug: "4-dof-robotic-manipulator",
      title: "4-DOF Robotic Manipulator",
      projectNumber: "PROJECT 04",
      category: "Robotics",
      subcategory: "Kinematics & Control",
      year: "2025",
      status: "Operational Prototype",
      statusType: "completed",
      featured: true,
      heroImage: "assets/images/robotic_manipulator.jpg",
      shortDescription: "A self-developed four-degree-of-freedom robotic arm exploring mechanical design, kinematics, control and future AI-assisted manipulation.",
      leadQuote: "Designing a high-rigidity open robotic platform from raw aluminum billets to closed-loop trajectory execution.",
      overview: "Built from the ground up to explore robotic link kinematics, timing belt reduction stages, backlash reduction, and real-time inverse kinematics solvers running on microcontroller hardware.",
      
      story: {
        problem: "Commercial educational robot arms either use flexible plastic joints with excessive backlash or cost thousands of dollars, limiting real-time kinematic and vision experimentation.",
        idea: "Design an all-metal, high-stiffness 4-DOF manipulator with balanced mass distribution, tensioned GT2 timing belts, high-resolution magnetic encoders, and embedded inverse kinematics.",
        engineering: "Kinematic layout uses Denavit-Hartenberg parameterization with analytical inverse kinematics solved in real-time at 200 Hz on an onboard STM32/ESP32 controller. Each axis utilizes NEMA 17/23 steppers with TMC2209 silent microstepping drivers.",
        design: "Structural links machined from 6061-T6 aluminum plates with pocketed webbing for optimal stiffness-to-weight ratio. Dual deep-groove ball bearings support every rotational pivot.",
        building: "Milled on CNC machining center, assembled with precision shims, wired with flexible high-flex drag-chain cabling, and fitted with a parallel-jaw servo gripper.",
        testing: "Tested for positional repeatability using dial test indicators (< 0.25 mm repeatability) and step-response damping across varied payload weights up to 600g.",
        whatFailed: "Cantilevered shoulder joint experienced torsional flex under rapid acceleration when carrying full payload at maximum reach.",
        whatChanged: "Added a secondary outboard bearing support bracket and widened the shoulder stance, increasing torsional stiffness by 340%.",
        currentStatus: "Fully operational mechanical and firmware platform. Currently serving as workbench testbed for computer vision grasping experiments.",
        whatsNext: "Integration of eye-in-hand depth sensor and ROS 2 MoveIt 2 trajectory planning nodes."
      },

      specs: [
        { label: "Degrees of Freedom", value: "4-DOF + 1 Gripper Axis" },
        { label: "Reach", value: "480 mm maximum radius" },
        { label: "Payload Capacity", value: "600 grams at full extension" },
        { label: "Repeatability", value: "± 0.25 mm (measured)" },
        { label: "Drive System", value: "GT2 Timing Belt + Planetary Reducers" },
        { label: "Controller", value: "32-bit ARM Cortex-M4 (200 Hz loop)" }
      ],

      gallery: [
        { url: "assets/images/robotic_manipulator.jpg", caption: "Assembled 4-DOF manipulator on optical test breadboard." }
      ],

      documents: [
        { name: "Forward & Inverse Kinematics Derivation", type: "PDF Notes", size: "1.9 MB", filename: "4DOF_Kinematics_Math.pdf" },
        { name: "3D CAD Solid Model Assembly", type: "STEP", size: "24.2 MB", filename: "Manipulator_4DOF_CAD.step" }
      ],

      tags: ["Robotics", "Kinematics", "CNC Machining", "Embedded Systems", "Motion Control"]
    },

    {
      id: "05",
      slug: "emg-controlled-bionic-arm",
      title: "EMG-Controlled Bionic Arm",
      projectNumber: "PROJECT 05",
      category: "Robotics",
      subcategory: "Human-Machine Interaction",
      year: "2024",
      status: "Award Winning Prototype",
      statusType: "completed",
      featured: true,
      heroImage: "assets/images/emg_bionic_arm.jpg",
      shortDescription: "A prototype robotic arm controlled using EMG signals, exploring human-machine interaction and assistive robotics.",
      leadQuote: "Translating human muscle bio-potentials into intuitive, multi-finger assistive prosthetic motion.",
      overview: "Developed to bridge assistive biomechatronics and real-time signal processing. Uses surface electromyography (sEMG) to capture electrical potentials generated by forearm muscle contractions and translate them into proportional prosthetic grip patterns.",
      
      story: {
        problem: "Upper-limb amputees often face cost barriers or clunky, unintuitive switch-based prostheses with poor grip modulation.",
        idea: "A lightweight, modular, 3D-printed bionic hand utilizing multi-channel sEMG sensor filtering, envelope extraction, and tendon-driven finger articulators.",
        engineering: "Differential analog front-end with instrumentation amplifiers, 50 Hz notch filter, 20-500 Hz bandpass filter, and full-wave rectification. Feature extraction feeds an adaptive threshold classifier.",
        design: "Anatomically proportioned SLS nylon hand with compliant silicone fingertips for enhanced friction. Actuated via miniature DC gearmotors and Dyneema fiber tendons with passive spring return.",
        building: "Printed structural parts, assembled PCB for analog filtering, and created forearm socket test interface for live subject calibration.",
        testing: "Validated across multiple grip patterns (precision pinch, power grasp, point gesture) with diverse subjects. Evaluated response latency (< 90 ms from muscle flexion to grasp).",
        whatFailed: "Skin impedance variations and sweat accumulation caused baseline DC drift in analog filters during prolonged testing.",
        whatChanged: "Implemented dynamic software baseline recalibration and AC-coupled active dry-electrode geometry.",
        currentStatus: "Completed undergraduate project prototype. Awarded 'Best Social Impact' in Undergraduate Project Competition.",
        whatsNext: "Exploring embedded neural-network gesture classification on low-power Edge-AI microcontrollers."
      },

      specs: [
        { label: "Award", value: "Best Social Impact — Project Competition" },
        { label: "Sensor Channels", value: "Dual Differential sEMG" },
        { label: "Latency", value: "< 90 ms actuation response" },
        { label: "Grip Modes", value: "Power Grasp, Precision Pinch, Index Point" },
        { label: "Actuation", value: "5x Micro DC Geared Tendon Drives" },
        { label: "Hand Weight", value: "410 grams" }
      ],

      gallery: [
        { url: "assets/images/emg_bionic_arm.jpg", caption: "Bionic arm on calibration rig during EMG sensor telemetry logging." }
      ],

      documents: [
        { name: "Project Report & EMG Signal Processing Pipeline", type: "PDF Report", size: "5.6 MB", filename: "EMG_Bionic_Arm_Final_Report.pdf" }
      ],

      tags: ["Robotics", "Assistive Tech", "EMG", "Signal Processing", "Biomechanics"]
    },

    {
      id: "06",
      slug: "custom-satellite-flight-computer",
      title: "Custom Satellite Flight Computer",
      projectNumber: "PROJECT 06",
      category: "Electronics",
      subcategory: "Space Systems",
      year: "2024",
      status: "Hardware Validated",
      statusType: "completed",
      featured: false,
      heroImage: "assets/images/flight_computer.jpg",
      shortDescription: "A custom embedded flight-computer prototype built around an ATmega328P, exploring spacecraft electronics and embedded systems.",
      leadQuote: "Custom avionics hardware architecture engineered for low-power spacecraft telemetry and subsystem telemetry control.",
      overview: "Designed as an avionics architecture testbed to study power-efficient satellite command & data handling (C&DH), fault tolerance, and multi-sensor bus integration.",
      
      story: {
        problem: "Commercial off-the-shelf development boards lack redundant power regulation, watchdog circuitry, and space-format bus pinouts needed for satellite subsystem integration.",
        idea: "Design a dedicated CubeSat-compatible avionics board with isolated SPI/I2C sensor buses, redundant LDO regulators, onboard flash logging, and external hardware watchdog supervisor.",
        engineering: "Features an ATmega328P microcontroller core, external SPI flash memory for telemetry buffering, Texas Instruments TPS-series low-dropout regulators, and radio transceiver header pins.",
        design: "2-layer PCB designed in KiCad with continuous ground plane, thermal relief vias, gold ENIG surface finish, and standard PC/104 form factor mounting hole pattern.",
        building: "SMD reflow soldered in workshop lab, cleaned in ultrasonic PCB bath, and bench-tested with logic analyzers and oscilloscopes.",
        testing: "Subjected to 72-hour continuous telemetry ping test, simulated sensor dropouts, and brown-out voltage recovery cycles.",
        whatFailed: "I2C bus lockup occurred when a slave sensor experienced voltage dips during high-draw transmit bursts.",
        whatChanged: "Added automatic I2C bus recovery routine with software clock-toggling and dedicated power isolation switches for sensor peripherals.",
        currentStatus: "Hardware validated and utilized across satellite subsystem test benches.",
        whatsNext: "Designing 32-bit Cortex-M7 radiation-tolerant architecture with FRAM memory."
      },

      specs: [
        { label: "Core MCU", value: "ATmega328P @ 16 MHz (5V / 3.3V Logic)" },
        { label: "Form Factor", value: "CubeSat PC/104 Standard Mounting" },
        { label: "Storage", value: "32 Mbit SPI Flash Memory" },
        { label: "Interfaces", value: "SPI, I2C, UART, JTAG/ISP" },
        { label: "Power Draw", value: "120 mW nominal operating" }
      ],

      gallery: [
        { url: "assets/images/flight_computer.jpg", caption: "Flight computer PCB during oscilloscope signal integrity verification." }
      ],

      documents: [
        { name: "PCB Schematic & Board Layout", type: "PDF Schematic", size: "2.1 MB", filename: "Flight_CPU_Schematics.pdf" },
        { name: "Gerber Manufacturing Package", type: "ZIP", size: "3.4 MB", filename: "Flight_CPU_Gerbers.zip" }
      ],

      tags: ["Electronics", "Avionics", "Embedded Systems", "PCB Design", "CubeSat"]
    },

    {
      id: "07",
      slug: "modular-cnc-machine",
      title: "Modular CNC Machine",
      projectNumber: "PROJECT 07",
      category: "Manufacturing",
      subcategory: "Machine Architecture",
      year: "2024",
      status: "Operational in Workshop",
      statusType: "completed",
      featured: false,
      heroImage: "assets/images/modular_cnc.jpg",
      shortDescription: "An experimental modular CNC platform exploring accessible digital manufacturing and machine architecture.",
      leadQuote: "Building precision machine tools to build better physical prototypes.",
      overview: "To accelerate physical rapid prototyping, Hardik designed and assembled a high-rigidity modular 3-axis CNC milling machine for precision machining of aluminum, brass, acetal, and engineering composites.",
      
      story: {
        problem: "Commercial desktop CNC routers frequently use rubber V-wheels on extruded aluminum tracks, lacking the dynamic stiffness required for tight-tolerance aluminum machining.",
        idea: "A modular, gantry-style CNC machine built around MGN15 linear profile guide rails, C7 ballscrews, and heavy structural aluminum T-slot extrusions.",
        engineering: "Direct-drive NEMA 23 stepper motors on X/Y/Z axes coupled to ballscrews via zero-backlash spider couplings. 1.5 kW air-cooled variable frequency spindle capable of up to 24,000 RPM.",
        design: "Finite Element Analysis (FEA) performed on gantry risers to minimize resonance and deflection during heavy end-mill engagement.",
        building: "Machined own custom aluminum motor mounts, gantry plates, and tramming fixtures. Trammed machine bed to within 0.03 mm across full 300 × 300 mm work envelope.",
        testing: "Machined test calibration blocks measuring dimensional accuracy, perpendicularity, surface finish (Ra), and circularity.",
        whatFailed: "Initial single-motor Y-axis drive caused subtle gantry racking under asymmetric tool loads.",
        whatChanged: "Converted to dual-stepper synchronized Y-axis leadscrew configuration with independent homing limit switches for automatic squaring.",
        currentStatus: "Primary rapid machining platform in workshop, having produced parts for all subsequent aerospace and robotic prototypes.",
        whatsNext: "Adding 4th rotary axis indexing head and minimum quantity lubrication (MQL) mist system."
      },

      specs: [
        { label: "Work Envelope", value: "300 × 300 × 90 mm (X, Y, Z)" },
        { label: "Linear Guides", value: "MGN15 Precision Profile Linear Rails" },
        { label: "Drive Mechanism", value: "SFU1204 Anti-Backlash Ballscrews" },
        { label: "Spindle", value: "1.5 kW Air-Cooled ER11 (24k RPM)" },
        { label: "Positional Accuracy", value: "± 0.03 mm across envelope" }
      ],

      gallery: [
        { url: "assets/images/modular_cnc.jpg", caption: "Custom modular CNC milling machine during aluminum prototype machining." }
      ],

      documents: [
        { name: "Machine Architecture & Structural FEA", type: "PDF Report", size: "3.7 MB", filename: "Modular_CNC_Design_Report.pdf" }
      ],

      tags: ["Manufacturing", "CNC", "Machine Design", "Mechanical Engineering", "Tooling"]
    },

    {
      id: "08",
      slug: "cloud-chamber",
      title: "Cloud Chamber",
      projectNumber: "PROJECT 08",
      category: "Physics",
      subcategory: "Experimental Hardware",
      year: "2023",
      status: "Operational Apparatus",
      statusType: "completed",
      featured: false,
      heroImage: "assets/images/cloud_chamber.jpg",
      shortDescription: "An experimental apparatus built to visualize particle tracks and explore radiation physics through hands-on experimentation.",
      leadQuote: "Making the invisible visible: observing background cosmic rays and alpha particle ionization trails in real time.",
      overview: "Built to observe subatomic physics directly. A continuously sensitive diffusion cloud chamber creates a supersaturated alcohol vapor zone where ionizing radiation triggers instantaneous condensation trails.",
      
      story: {
        problem: "Traditional cloud chambers using dry ice have short run times (under 30 minutes) and suffer from temperature instability.",
        idea: "A solid-state, continuously operating Peltier-cooled diffusion chamber with closed-loop water cooling and precision LED sheet illumination.",
        engineering: "Multi-stage thermoelectric Peltier cooling stack capable of reaching -32°C at the condenser plate, paired with a top-mounted heated alcohol felt reservoir.",
        design: "Clear borosilicate glass cylinder sealed with silicone gaskets to maintain an airtight alcohol atmosphere with high optical clarity.",
        building: "Assembled thermal management block with high-flow liquid CPU radiator, integrated digital temperature sensors, and high-voltage static clearing grid (+1 kV).",
        testing: "Successfully visualized background cosmic muon tracks and dense, high-LET alpha particle trajectories from weak test sources.",
        whatFailed: "Thermal bottleneck at the hot side of the Peltier elements initially prevented reaching temperatures below -20°C.",
        whatChanged: "Upgraded water-cooling loop with copper cold plate and high-velocity pump, easily achieving continuous -30°C stability.",
        currentStatus: "Fully functional physics demonstration and experimental radiation apparatus.",
        whatsNext: "Automating particle track trajectory detection using high-frame-rate computer vision."
      },

      specs: [
        { label: "Cooling Method", value: "Thermoelectric Peltier + Liquid Heat Exchanger" },
        { label: "Condenser Temperature", value: "-30°C to -32°C continuous" },
        { label: "Vapor Medium", value: "Isopropanol (99.9% Purity)" },
        { label: "Illumination", value: "High-CRI Lateral Collimated LED Sheet" },
        { label: "High Voltage Field", value: "+1.2 kV Electrostatic Clearing Grid" }
      ],

      gallery: [
        { url: "assets/images/cloud_chamber.jpg", caption: "Alpha particle ionization tracks visualized in supersaturated vapor layer." }
      ],

      documents: [
        { name: "Diffusion Chamber Physics & Thermal Calculations", type: "PDF Notes", size: "2.8 MB", filename: "Cloud_Chamber_Physics_Notes.pdf" }
      ],

      tags: ["Physics", "Experimental Hardware", "Thermal Systems", "Particle Physics"]
    }
  ],

  research: {
    publications: [
      {
        id: "pub-01",
        title: "Structural Optimization of a Rigid Boom Structure for a Patch Antenna for Satellite Applications",
        venue: "Simcenter Technology Conference / Technical Manuscript",
        year: "2026",
        authors: "Hardik Raut, et al.",
        status: "Conference Paper",
        abstract: "Finite element modeling, modal analysis, and mass-optimization of an ultra-compact deployable rigid boom structure designed to support high-gain patch antennas on satellite platforms under launch vibration PSD profiles and space-environment loading.",
        tags: ["Space Structures", "FEA", "Satellite Antennas", "Structural Optimization"]
      }
    ],
    patents: [
      {
        id: "pat-01",
        title: "A Deployable and Retractable Membrane Deployment System",
        context: "Patent under COEP Satellite Initiative",
        appNumber: "202621073997",
        filedDate: "Jun 15, 2026",
        status: "Application Filed",
        statusBadge: "Pending Application",
        year: "2026",
        summary: "A mechanism facilitating controlled, jam-free bi-directional deployment and retraction of flexible membrane substrates and deployable solar arrays in volume-constrained aerospace vehicles."
      },
      {
        id: "pat-02",
        title: "Freewheel based Deployer for Satellite",
        context: "Personal Patent",
        appNumber: "202521120359",
        filedDate: "Dec 2, 2025",
        status: "Application Filed",
        statusBadge: "Pending Application",
        year: "2025",
        summary: "A compact pull-type retractable boom deployer for CubeSat applications featuring a dual-spindle freewheel mechanism and tension-driven ribbon actuation for controlled, reversible deployment with passive overspeed protection."
      },
      {
        id: "pat-03",
        title: "Electrolytic Thruster",
        context: "Personal Patent",
        appNumber: "473721-001",
        filedDate: "Sep 16, 2025",
        status: "Patent Granted",
        statusBadge: "Granted",
        year: "2025",
        summary: "A compact satellite propulsion system architecture integrating onboard pulsed water electrolysis with vacuum-compatible micropropulsion expansion for non-toxic in-orbit maneuvering."
      },
      {
        id: "pat-04",
        title: "The Cloud Chamber",
        context: "Personal Patent",
        appNumber: "202421059911",
        filedDate: "Aug 8, 2024",
        status: "Application Filed",
        statusBadge: "Pending Application",
        year: "2024",
        summary: "A continuously operating solid-state diffusion cloud chamber apparatus with thermoelectric multi-stage Peltier cooling, high-voltage electrostatic clearing grid, and precision illumination for real-time particle track visualization."
      }
    ],
    conferences: [
      {
        id: "conf-01",
        title: "Simcenter Technology Conference 2026",
        location: "Pune, India",
        year: "May 7, 2026",
        topic: "Presented research paper: 'Structural Optimization of a Rigid Boom Structure for a Patch Antenna for Satellite Applications' — showcasing computational approaches to aerospace structural FEA, modal analysis, and optimization."
      },
      {
        id: "conf-02",
        title: "GeoSmart India Conference 2025 (incl. India–Japan Space & Geospatial Roundtable)",
        location: "Delhi, India",
        year: "Dec 2–5, 2025",
        topic: "Represented CSAT at the GeoSmart India Conference in Delhi and participated in the India–Japan Space & Geospatial Roundtable, engaging with industry, defense, and international aerospace stakeholders on satellite platform architectures."
      }
    ],
    awards: [
      {
        id: "award-01",
        title: "1st Place — Best Social Impact Category",
        forItem: "The Bionic Arm (UG Project Competition at COEP)",
        year: "Jun 21, 2025"
      },
      {
        id: "award-02",
        title: "Best Paper Presenter Team",
        forItem: "Effect of Constructive Divergence on Problem Solving Approaches (Industrial Psychology)",
        year: "Dec 5, 2024"
      }
    ]
  },

  notes: [
    {
      id: "note-01",
      slug: "tape-spring-hysteresis-observations",
      title: "Measuring Hysteresis and Micro-Stiction in CuBe2 Tape Springs",
      category: "Space Mechanisms",
      date: "September 02, 2026",
      readTime: "4 min read",
      summary: "Experimental notes on non-linear strain behavior during continuous unspooling cycles at varied thermal setpoints.",
      content: `When calculating deployment force margins for compact boom deployers, classic linear beam theory overestimates the available unwinding torque near the center hub by approximately 18-22%.

In our test bench trials with 0.12 mm Beryllium-Copper (CuBe2) heat-treated strips, we observed significant inter-layer friction when unlubricated in ambient conditions. Under high vacuum, this manifests as micro-stiction steps unless an ultra-thin sputtered dry-film MoS2 or Diamond-Like Carbon (DLC) coating is applied.

Key findings:
1. Ribbon thickness tolerance (± 0.005 mm) directly impacts deployment force exponentially (proportional to t³).
2. Spool hub radius must exceed 12x ribbon thickness to eliminate plastic strain during 6-month stowage.
3. Fluidic damping must scale non-linearly with deployment velocity to avoid terminal snap-back shocks.`,
      tags: ["Mechanisms", "Testing", "Materials", "Space Systems"]
    },
    {
      id: "note-02",
      slug: "electrolysis-bubble-dynamics-micro-gravity",
      title: "Gas-Liquid Boundary Separation in Miniature Electrolysis Cells",
      category: "Propulsion",
      date: "August 18, 2026",
      readTime: "5 min read",
      summary: "Observations on two-phase fluid behavior and membrane water-flooding prevention in compact hydrogen/oxygen generators.",
      content: `In ground testing of water electrolysis for micro-propulsion, buoyancy naturally pulls H2 and O2 bubbles away from the titanium mesh electrodes. However, in orbital microgravity, surface tension dominates, and gas bubbles coalesce into an insulating sheath over the catalyst layer.

We constructed a high-speed optical monitoring cell to evaluate acoustic vibration agitation at 28 kHz.

Preliminary findings indicate that ultrasonic pulse agitation effectively dislodges micro-bubbles under 50 microns before they coalesce, reducing cell overpotential by 310 mV at 1.5 A/cm² current density.`,
      tags: ["Propulsion", "Fluidics", "Electrochemistry", "Experiments"]
    },
    {
      id: "note-03",
      slug: "machining-thin-walled-aluminum-envelopes",
      title: "Fixturing Strategy for 0.8 mm Thin-Wall 6061-T6 CubeSat Chassis",
      category: "Manufacturing",
      date: "July 24, 2026",
      readTime: "3 min read",
      summary: "Eliminating harmonic chatter and workpiece deflection when CNC milling lightweight aerospace structural envelopes.",
      content: `Machining 0.8 mm structural ribs on 6061-T6 aluminum without distortion requires strict control over tool engagement angle and clamping stress.

Our standardized workflow:
1. Low melting point alloy (Cerrobend) or machinable wax backing poured inside the hollowed pocket for internal support during final finish passes.
2. 3-flute carbide DLC-coated micro endmills running at 18,000 RPM with 0.08 mm chip load.
3. Climb milling exclusively with constant engagement trochoidal toolpaths to minimize radial cutting forces.

Result: Wall thickness uniformity held within ± 0.015 mm with zero measurable rib warping.`,
      tags: ["Manufacturing", "CNC", "Machining", "CAD/CAM"]
    },
    {
      id: "note-04",
      slug: "emg-filter-hardware-topology",
      title: "Active Analog Front-End Filtering for Bio-Potential Extraction",
      category: "Electronics",
      date: "May 10, 2026",
      readTime: "4 min read",
      summary: "Hardware schematics and Bode plot analysis for 50 Hz power-line notch and muscle signal conditioning.",
      content: `Capturing surface electromyography signals in typical urban laboratories is notorious for 50 Hz electromagnetic interference. Digital notch filters introduce phase distortion and computation latency on simple microcontrollers.

A hardware Twin-T active notch filter with adjustable Q-factor combined with an instrumentation amplifier (AD620) yields superior signal-to-noise ratio (> 82 dB) before ADC digitization.

The total group delay across the 20 Hz - 450 Hz bio-signal band was measured under 2.2 ms, ensuring near-zero perceptual lag for prosthetic actuation.`,
      tags: ["Electronics", "Analog", "Bio-Signals", "PCB"]
    }
  ],

  about: {
    education: [
      {
        institution: "COEP Technological University",
        degree: "B.Tech — Manufacturing Engineering",
        location: "Pune, India",
        note: "Focus on precision manufacturing, structural mechanics, digital fabrication, and space hardware systems."
      }
    ],
    experience: [
      {
        company: "Dhruva Space",
        role: "Structural Engineering Intern",
        type: "Internship",
        responsibilities: [
          "Structural engineering and mechanical CAD for aerospace structures",
          "Finite Element Analysis (FEA) and static load verification",
          "Vibration analysis and modal parameter extraction",
          "Design validation and manufacturing drawings"
        ]
      },
      {
        company: "COEP Satellite Initiative",
        role: "Structures Subsystem Lead",
        type: "Team Leadership & Engineering",
        responsibilities: [
          "Satellite structural architecture and CubeSat bus design",
          "Deployable mechanisms and boom systems engineering",
          "Environmental test design and verification planning",
          "Inter-subsystem coordination, team mentoring, and technical representation"
        ]
      }
    ],
    skills: [
      {
        category: "Mechanical Engineering",
        items: ["Mechanical Design", "CAD Modeling", "Mechanism Design", "Structural Engineering", "Finite Element Analysis (FEA)", "Vibration Analysis", "Design Optimization", "Design for Manufacturing (DFM)", "Precision Machining"]
      },
      {
        category: "Space Systems",
        items: ["Satellite Structures", "Deployable Structures", "Space Mechanisms", "Structural & Thermal Analysis", "CubeSat Architecture", "Environmental Testing"]
      },
      {
        category: "Robotics & Kinematics",
        items: ["Robotic Manipulators", "Kinematics & Dynamics", "Embedded Motion Control", "Sensor Integration", "Actuator Sizing"]
      },
      {
        category: "Electronics & Embedded",
        items: ["Embedded Systems", "Microcontrollers (ARM, AVR, ESP32)", "FPGA Prototyping", "PCB Design & Soldering", "Telemetry & Communication"]
      },
      {
        category: "Software & Simulation",
        items: ["MATLAB / Simulink", "SolidWorks", "Siemens NX", "Autodesk Inventor", "Onshape", "NX Nastran", "ROS 2", "Linux", "KiCad", "Arduino IDE"]
      }
    ],
    hardware: [
      "ESP32", "Raspberry Pi", "ATmega328P", "Tang Nano 9K FPGA", "NRF24L01 RF", "SX1278 LoRa", "OV7670 / OV3660 Cameras", "TMC2209 Drivers", "Strain Gauges & Load Cells"
    ],
    beyond: [
      "Experimental Physics & Particle Detection",
      "Low-Level Systems Programming",
      "Micro-Machining & Horology Mechanisms",
      "Astronomy & Spacecraft Trajectories",
      "AI-Assisted Mechanical Synthesis"
    ]
  }
};
