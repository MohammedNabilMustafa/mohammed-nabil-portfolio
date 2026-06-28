import { motion } from 'framer-motion';

export default function WorkflowTimeline({ steps = [], variant = 'default' }) {
  return (
    <div className={`workflow workflow--${variant}`}>
      {steps.map((step, i) => (
        <motion.div
          key={step.step}
          className="workflow__step"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
        >
          <div className="workflow__node"><span>{step.step}</span></div>
          <div className="workflow__content">
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
