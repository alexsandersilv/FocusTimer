using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Timers;
using System.Windows.Forms;

namespace FocusTimer
{
    public partial class Form1 : Form
    {

        public bool isRunning = false;

        public Form1()
        {
       
            InitializeComponent();
            this.Load += new EventHandler(Form1_Load);

            timer.Interval = 1000; 
            timer.Tick += Timer_Tick;
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            int totalWidth = this.minutes.Width + this.separator.Width + this.seconds.Width;
            int xPosition = (this.ClientSize.Width - totalWidth) / 2;

            this.minutes.Location = new Point(xPosition, this.minutes.Location.Y + 30);
            this.separator.Location = new Point(xPosition + this.minutes.Width, this.separator.Location.Y + 30);
            this.seconds.Location = new Point(xPosition + this.minutes.Width + this.separator.Width, this.seconds.Location.Y + 30);

            this.play.Location = new Point(xPosition, this.seconds.Location.Y + 250);
            this.pause.Location = new Point(xPosition + this.minutes.Width + this.separator.Width, this.seconds.Location.Y + 250);

        }

        private void Timer_Tick(object sender, EventArgs e)
        {
            int mnts = int.Parse(minutes.Text);
            int scds = int.Parse(seconds.Text);

            if (scds == 0)
            {
                if (mnts == 0)
                {
                    play.Text = "PLAY";
                    isRunning = false;
                    timer.Stop();
                    return;
                }

                scds = 59;
                mnts--;
            }
            else
            {
                scds--;
            }

            if (scds < 10)
            {
                seconds.Text = "0" + scds.ToString();
            }
            else
            {
                seconds.Text = scds.ToString();
            }

            if (mnts < 10)
            {
                minutes.Text = "0" + mnts.ToString();
            }
            else
            {
                minutes.Text = mnts.ToString();
            }
        }

        private void play_Click(object sender, EventArgs e)
        {
            if (!isRunning)
            {
                play.Text = "STOP";
                isRunning = true;
                timer.Start();
            }
            else
            {
                play.Text = "PLAY";
                isRunning = false;
                timer.Stop();
            }
            
        }


        private void pause_Click(object sender, EventArgs e)
        {
            isRunning = false;
            timer.Stop();

            minutes.Text = "10";
            seconds.Text = "00";
        }
    }
}
