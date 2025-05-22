import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaFlagCheckered } from 'react-icons/fa';

const projectTimeline = [
  { title: 'Initiation', date: 'Jan 2024', description: 'Concept and planning' },
  { title: 'Phase 1 - Setup', date: 'Feb–Mar 2024', description: 'Infrastructure setup' },
  { title: 'Phase 2 - Community Training', date: 'Apr–May 2024', description: 'Outreach and training' },
  { title: 'Phase 3 - Implementation', date: 'June 2024', description: 'Service rollout' },
  { title: 'Expected Completion', date: 'Aug 2024', description: 'Evaluation and handover' },
];

function ProjectTimeline() {
  return (
    <VerticalTimeline>
      {projectTimeline.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          date={item.date}
          icon={<FaFlagCheckered />}
          iconStyle={{ background: '#166534', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <p>{item.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
