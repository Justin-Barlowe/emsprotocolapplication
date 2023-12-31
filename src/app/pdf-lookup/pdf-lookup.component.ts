import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdf-lookup',
  templateUrl: './pdf-lookup.component.html',
  styleUrls: ['./pdf-lookup.component.css']
})
export class PdfLookupComponent implements OnInit {
  pdfLookup: { [key: string]: string } = {

    // Protocols
    'key1': 'assets/adult-allergic.pdf',
    'key2': 'assets/adult-ams.pdf',
    'key3': 'assets/adult-asystole.pdf',
    'key4': 'assets/adult-teamcpr.pdf',
    'key5': 'assets/adult-backpain.pdf',
    'key6': 'assets/adult-bradycardia.pdf',
    'key7': 'assets/adult-cardiacarrest.pdf',
    'key8': 'assets/adult-chestpain.pdf',
    'key9': 'assets/adult-chf.pdf',
    'key10': 'assets/adult-childbirth.pdf',
    'key11': 'assets/adult-copd.pdf',
    'key12': 'assets/adult-cprtermination.pdf',
    'key13': 'assets/adult-diabetic.pdf',
    'key14': 'assets/adult-dialysis.pdf',
    'key15': 'assets/adult-drugassistedairway.pdf',
    'key16': 'assets/adult-failed airway.pdf',
    'key17': 'assets/adult-hypertension.pdf',
    'key18': 'assets/adult-hypotension.pdf',
    'key19': 'assets/adult-lvad.pdf',
    'key20': 'assets/adult-monotachy.pdf',
    'key21': 'assets/adult-obemergency.pdf',
    'key22': 'assets/adult-polytachy.pdf',
    'key23': 'assets/adult-postintubation.pdf',
    'key24': 'assets/adult-postresus.pdf',
    'key25': 'assets/adult-tachycardia.pdf',
    'key26': 'assets/adult-universal.pdf',
    'key27': 'assets/adult-vfib.pdf',
    'key28': 'assets/Airway.pdf',
    'key29': 'assets/ashtma-management.pdf',
    'key30': 'assets/behavioral.pdf',
    'key31': 'assets/bites.pdf',
    'key32': 'assets/blastinjury.pdf',
    'key33': 'assets/carbonmonoxide.pdf',
    'key34': 'assets/centrallines.pdf',
    'key35': 'assets/chemicalburns.pdf',
    'key36': 'assets/cp-bipap.pdf',
    'key37': 'assets/cp-copd.pdf',
    'key38': 'assets/cp-diabetic.pdf',
    'key39': 'assets/cp-followup.pdf',
    'key40': 'assets/cp-lab.pdf',
    'key41': 'assets/cp-medications.pdf',
    'key42': 'assets/cp-safety.pdf',
    'key43': 'assets/cp-social.pdf',
    'key44': 'assets/cp-wound.pdf',
    'key45': 'assets/crushinjury.pdf',
    'key46': 'assets/dental.pdf',
    'key47': 'assets/drowning.pdf',
    'key48': 'assets/extremitytrauma.pdf',
    'key49': 'assets/fever.pdf',
    'key50': 'assets/headtrauma.pdf',
    'key51': 'assets/hyperthermia.pdf',
    'key52': 'assets/hypothermia.pdf',
    'key53': 'assets/law-narcan.pdf',
    'key54': 'assets/marine.pdf',
    'key55': 'assets/medical-abdpain.pdf',
    'key56': 'assets/multipletrauma.pdf',
    'key57': 'assets/nosebleed.pdf',
    'key58': 'assets/overdose.pdf',
    'key59': 'assets/paincontrol.pdf',
    'key60': 'assets/ped-airway.pdf',
    'key61': 'assets/ped-allergic.pdf',
    'key62': 'assets/ped-asystole.pdf',
    'key63': 'assets/ped-bradycardia.pdf',
    'key64': 'assets/ped-cardiacarrest.pdf',
    'key65': 'assets/ped-chf.pdf',
    'key66': 'assets/ped-diabetic.pdf',
    'key67': 'assets/ped-failedairway.pdf',
    'key68': 'assets/ped-hypotenstion.pdf',
    'key69': 'assets/ped-newlyborn.pdf',
    'key70': 'assets/ped-tachycardia.pdf',
    'key71': 'assets/ped-tachycardiawide.pdf',
    'key72': 'assets/ped-vfib.pdf',
    'key73': 'assets/policecustody.pdf',
    'key74': 'assets/proc-IV.pdf',
    'key75': 'assets/radiation.pdf',
    'key76': 'assets/scenerehab-responder.pdf',
    'key77': 'assets/scenerehab.pdf',
    'key78': 'assets/seizure.pdf',
    'key79': 'assets/sepsis.pdf',
    'key80': 'assets/sog.pdf',
    'key81': 'assets/spec-ebola.pdf',
    'key82': 'assets/spec-high.pdf',
    'key83': 'assets/spec-hospice.pdf',
    'key84': 'assets/spec-monoclonal.pdf',
    'key85': 'assets/spec-vaccination.pdf',
    'key86': 'assets/spinal.pdf',
    'key87': 'assets/stroke.pdf',
    'key88': 'assets/thermal.pdf',
    'key89': 'assets/total-artifical-heart.pdf',
    'key90': 'assets/tracheostomy.pdf',
    'key91': 'assets/traumaarrest.pdf',
    'key92': 'assets/triage.pdf',
    'key93': 'assets/ventilator.pdf',
    'key94': 'assets/wearable.pdf',
    'key95': 'assets/wmd.pdf',

    // Documents
    'key96': 'assets/bloodbornepath.pdf',
    'key97': 'assets/dailyduties.pdf',
    'key98': 'assets/docpolicy.pdf',
    'key99': 'assets/emd.pdf',
    'key100': 'assets/mascalplan.pdf',
    'key101': 'assets/personnelord.pdf',
    'key102': 'assets/policies.pdf',
    'key103': 'assets/procedures.pdf',
    'key104': 'assets/protocolappendix.pdf',
    'key105': 'assets/socialmedia.pdf',
    'key106': 'assets/trainingcalendar.pdf',
    'key107': 'assets/2023fullprotocols.pdf',

  };

  selectedPdf!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.selectedPdf = this.pdfLookup[id as string] || 'assets/default.pdf';
    });
  }
}
